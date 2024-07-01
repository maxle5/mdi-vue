
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDoorClosedLock from "../../src/components/MdiDoorClosedLock.vue";

test("MdiDoorClosedLock snapshot", () => {
  const wrapper = mount(MdiDoorClosedLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
