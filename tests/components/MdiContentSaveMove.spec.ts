
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveMove from "../../src/components/MdiContentSaveMove.vue";

test("MdiContentSaveMove snapshot", () => {
  const wrapper = mount(MdiContentSaveMove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
