
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxLockOpenOutline from "../../src/components/MdiPlayBoxLockOpenOutline.vue";

test("MdiPlayBoxLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiPlayBoxLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
