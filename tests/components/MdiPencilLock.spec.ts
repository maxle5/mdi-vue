
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilLock from "../../src/components/MdiPencilLock.vue";

test("MdiPencilLock snapshot", () => {
  const wrapper = mount(MdiPencilLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
