
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNintendoWiiu from "../../src/components/MdiNintendoWiiu.vue";

test("MdiNintendoWiiu snapshot", () => {
  const wrapper = mount(MdiNintendoWiiu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
