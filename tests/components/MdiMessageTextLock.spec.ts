
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextLock from "../../src/components/MdiMessageTextLock.vue";

test("MdiMessageTextLock snapshot", () => {
  const wrapper = mount(MdiMessageTextLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
