
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxLock from "../../src/components/MdiPlayBoxLock.vue";

test("MdiPlayBoxLock snapshot", () => {
  const wrapper = mount(MdiPlayBoxLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
