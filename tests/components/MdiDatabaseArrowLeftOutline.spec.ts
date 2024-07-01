
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowLeftOutline from "../../src/components/MdiDatabaseArrowLeftOutline.vue";

test("MdiDatabaseArrowLeftOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
