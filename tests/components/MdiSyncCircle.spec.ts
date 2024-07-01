
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSyncCircle from "../../src/components/MdiSyncCircle.vue";

test("MdiSyncCircle snapshot", () => {
  const wrapper = mount(MdiSyncCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
