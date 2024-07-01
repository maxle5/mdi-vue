
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStadiumOutline from "../../src/components/MdiStadiumOutline.vue";

test("MdiStadiumOutline snapshot", () => {
  const wrapper = mount(MdiStadiumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
