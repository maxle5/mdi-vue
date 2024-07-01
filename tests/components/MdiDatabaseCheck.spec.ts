
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseCheck from "../../src/components/MdiDatabaseCheck.vue";

test("MdiDatabaseCheck snapshot", () => {
  const wrapper = mount(MdiDatabaseCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
