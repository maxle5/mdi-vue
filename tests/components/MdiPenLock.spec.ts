
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPenLock from "../../src/components/MdiPenLock.vue";

test("MdiPenLock snapshot", () => {
  const wrapper = mount(MdiPenLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
