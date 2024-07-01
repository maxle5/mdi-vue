
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraRear from "../../src/components/MdiCameraRear.vue";

test("MdiCameraRear snapshot", () => {
  const wrapper = mount(MdiCameraRear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
