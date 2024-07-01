
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorOpen from "../../src/components/MdiDoorOpen.vue";

test("MdiDoorOpen snapshot", () => {
  const wrapper = mount(MdiDoorOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
