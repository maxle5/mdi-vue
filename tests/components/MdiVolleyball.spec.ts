
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolleyball from "../../src/components/MdiVolleyball.vue";

test("MdiVolleyball snapshot", () => {
  const wrapper = mount(MdiVolleyball, {});
  expect(wrapper.html()).toMatchSnapshot();
});
