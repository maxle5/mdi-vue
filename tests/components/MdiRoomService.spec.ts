
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoomService from "../../src/components/MdiRoomService.vue";

test("MdiRoomService snapshot", () => {
  const wrapper = mount(MdiRoomService, {});
  expect(wrapper.html()).toMatchSnapshot();
});
