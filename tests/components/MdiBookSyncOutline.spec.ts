
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSyncOutline from "../../src/components/MdiBookSyncOutline.vue";

test("MdiBookSyncOutline snapshot", () => {
  const wrapper = mount(MdiBookSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
