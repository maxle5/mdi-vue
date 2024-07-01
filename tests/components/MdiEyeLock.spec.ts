
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeLock from "../../src/components/MdiEyeLock.vue";

test("MdiEyeLock snapshot", () => {
  const wrapper = mount(MdiEyeLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
