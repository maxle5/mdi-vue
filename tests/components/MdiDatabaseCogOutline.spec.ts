
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseCogOutline from "../../src/components/MdiDatabaseCogOutline.vue";

test("MdiDatabaseCogOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
