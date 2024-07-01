
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeveloperBoard from "../../src/components/MdiDeveloperBoard.vue";

test("MdiDeveloperBoard snapshot", () => {
  const wrapper = mount(MdiDeveloperBoard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
