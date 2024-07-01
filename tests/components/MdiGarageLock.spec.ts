
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageLock from "../../src/components/MdiGarageLock.vue";

test("MdiGarageLock snapshot", () => {
  const wrapper = mount(MdiGarageLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
