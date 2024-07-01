
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNature from "../../src/components/MdiNature.vue";

test("MdiNature snapshot", () => {
  const wrapper = mount(MdiNature, {});
  expect(wrapper.html()).toMatchSnapshot();
});
