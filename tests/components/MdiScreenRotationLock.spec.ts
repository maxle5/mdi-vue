
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScreenRotationLock from "../../src/components/MdiScreenRotationLock.vue";

test("MdiScreenRotationLock snapshot", () => {
  const wrapper = mount(MdiScreenRotationLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
