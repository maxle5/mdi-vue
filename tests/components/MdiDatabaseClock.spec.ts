
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseClock from "../../src/components/MdiDatabaseClock.vue";

test("MdiDatabaseClock snapshot", () => {
  const wrapper = mount(MdiDatabaseClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
