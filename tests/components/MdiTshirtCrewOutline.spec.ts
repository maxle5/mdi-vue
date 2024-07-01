
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTshirtCrewOutline from "../../src/components/MdiTshirtCrewOutline.vue";

test("MdiTshirtCrewOutline snapshot", () => {
  const wrapper = mount(MdiTshirtCrewOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
