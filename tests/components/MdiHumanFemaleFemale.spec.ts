
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemaleFemale from "../../src/components/MdiHumanFemaleFemale.vue";

test("MdiHumanFemaleFemale snapshot", () => {
  const wrapper = mount(MdiHumanFemaleFemale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
