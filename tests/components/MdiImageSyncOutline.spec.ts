
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSyncOutline from "../../src/components/MdiImageSyncOutline.vue";

test("MdiImageSyncOutline snapshot", () => {
  const wrapper = mount(MdiImageSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
