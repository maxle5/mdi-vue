
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseEdit from "../../src/components/MdiDatabaseEdit.vue";

test("MdiDatabaseEdit snapshot", () => {
  const wrapper = mount(MdiDatabaseEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
