
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageLock from "../../src/components/MdiImageLock.vue";

test("MdiImageLock snapshot", () => {
  const wrapper = mount(MdiImageLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
