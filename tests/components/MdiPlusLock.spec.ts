
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusLock from "../../src/components/MdiPlusLock.vue";

test("MdiPlusLock snapshot", () => {
  const wrapper = mount(MdiPlusLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
