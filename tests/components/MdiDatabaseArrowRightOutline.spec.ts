
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseArrowRightOutline from "../../src/components/MdiDatabaseArrowRightOutline.vue";

test("MdiDatabaseArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiDatabaseArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
