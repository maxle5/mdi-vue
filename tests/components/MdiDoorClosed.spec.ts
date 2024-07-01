
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorClosed from "../../src/components/MdiDoorClosed.vue";

test("MdiDoorClosed snapshot", () => {
  const wrapper = mount(MdiDoorClosed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
