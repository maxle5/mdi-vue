
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraAccount from "../../src/components/MdiCameraAccount.vue";

test("MdiCameraAccount snapshot", () => {
  const wrapper = mount(MdiCameraAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
