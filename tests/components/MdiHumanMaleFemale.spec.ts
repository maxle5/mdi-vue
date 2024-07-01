
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleFemale from "../../src/components/MdiHumanMaleFemale.vue";

test("MdiHumanMaleFemale snapshot", () => {
  const wrapper = mount(MdiHumanMaleFemale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
