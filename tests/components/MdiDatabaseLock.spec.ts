
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseLock from "../../src/components/MdiDatabaseLock.vue";

test("MdiDatabaseLock snapshot", () => {
  const wrapper = mount(MdiDatabaseLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
