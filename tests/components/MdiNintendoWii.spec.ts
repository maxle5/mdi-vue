
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNintendoWii from "../../src/components/MdiNintendoWii.vue";

test("MdiNintendoWii snapshot", () => {
  const wrapper = mount(MdiNintendoWii, {});
  expect(wrapper.html()).toMatchSnapshot();
});
