
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreClockOutline from "../../src/components/MdiStoreClockOutline.vue";

test("MdiStoreClockOutline snapshot", () => {
  const wrapper = mount(MdiStoreClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
