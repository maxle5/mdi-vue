
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleBoard from "../../src/components/MdiHumanMaleBoard.vue";

test("MdiHumanMaleBoard snapshot", () => {
  const wrapper = mount(MdiHumanMaleBoard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
