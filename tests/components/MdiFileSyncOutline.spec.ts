
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSyncOutline from "../../src/components/MdiFileSyncOutline.vue";

test("MdiFileSyncOutline snapshot", () => {
  const wrapper = mount(MdiFileSyncOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
