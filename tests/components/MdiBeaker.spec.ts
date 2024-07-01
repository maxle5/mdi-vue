
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeaker from "../../src/components/MdiBeaker.vue";

test("MdiBeaker snapshot", () => {
  const wrapper = mount(MdiBeaker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
