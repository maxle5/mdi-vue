
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyncOff from "../../src/components/MdiSyncOff.vue";

test("MdiSyncOff snapshot", () => {
  const wrapper = mount(MdiSyncOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
