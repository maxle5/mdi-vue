
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUmbrellaClosedOutline from "../../src/components/MdiUmbrellaClosedOutline.vue";

test("MdiUmbrellaClosedOutline snapshot", () => {
  const wrapper = mount(MdiUmbrellaClosedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
