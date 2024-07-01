
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveAll from "../../src/components/MdiContentSaveAll.vue";

test("MdiContentSaveAll snapshot", () => {
  const wrapper = mount(MdiContentSaveAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
