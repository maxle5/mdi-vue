
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStadiumVariant from "../../src/components/MdiStadiumVariant.vue";

test("MdiStadiumVariant snapshot", () => {
  const wrapper = mount(MdiStadiumVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
