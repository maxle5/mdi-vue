
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowRight from "../../src/components/MdiDatabaseArrowRight.vue";

test("MdiDatabaseArrowRight snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
