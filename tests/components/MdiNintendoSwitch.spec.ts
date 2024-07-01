
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNintendoSwitch from "../../src/components/MdiNintendoSwitch.vue";

test("MdiNintendoSwitch snapshot", () => {
  const wrapper = mount(MdiNintendoSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
