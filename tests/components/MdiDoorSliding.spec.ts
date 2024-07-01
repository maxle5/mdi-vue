
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorSliding from "../../src/components/MdiDoorSliding.vue";

test("MdiDoorSliding snapshot", () => {
  const wrapper = mount(MdiDoorSliding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
