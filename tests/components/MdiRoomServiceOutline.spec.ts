
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoomServiceOutline from "../../src/components/MdiRoomServiceOutline.vue";

test("MdiRoomServiceOutline snapshot", () => {
  const wrapper = mount(MdiRoomServiceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
