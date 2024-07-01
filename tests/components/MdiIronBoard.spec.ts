
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIronBoard from "../../src/components/MdiIronBoard.vue";

test("MdiIronBoard snapshot", () => {
  const wrapper = mount(MdiIronBoard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
