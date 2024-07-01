
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleMale from "../../src/components/MdiHumanMaleMale.vue";

test("MdiHumanMaleMale snapshot", () => {
  const wrapper = mount(MdiHumanMaleMale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
