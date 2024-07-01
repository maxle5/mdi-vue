
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowLeft from "../../src/components/MdiDatabaseArrowLeft.vue";

test("MdiDatabaseArrowLeft snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
