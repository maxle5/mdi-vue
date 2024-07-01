
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseCog from "../../src/components/MdiDatabaseCog.vue";

test("MdiDatabaseCog snapshot", () => {
  const wrapper = mount(MdiDatabaseCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
