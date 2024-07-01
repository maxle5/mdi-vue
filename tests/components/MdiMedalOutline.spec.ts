
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedalOutline from "../../src/components/MdiMedalOutline.vue";

test("MdiMedalOutline snapshot", () => {
  const wrapper = mount(MdiMedalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
