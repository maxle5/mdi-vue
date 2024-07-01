
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCookieLock from "../../src/components/MdiCookieLock.vue";

test("MdiCookieLock snapshot", () => {
  const wrapper = mount(MdiCookieLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
